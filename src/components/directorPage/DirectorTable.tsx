import { Table, Image, Button, Space } from 'antd';
import type { TableProps } from 'antd';
import type { DirectorType } from './DirectorType';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';


const DirectorTable = ({data}:{data?:DirectorType[]}) => { 
  const queryClient = useQueryClient()

    async function deleteDirector(id:string) {
        try{
            await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/director/${id}`)
            toast.success("O'chirildi")
            queryClient.invalidateQueries({
                queryKey:["movie_actors"]
            })
        }catch(err){
            console.log(err);
            toast.error("Xatolik yuz berdi")
        }
    }

    const columns: TableProps<DirectorType>['columns'] = [
        {
          title: 'Photo',
          dataIndex: 'photo_url',
          key: 'photo_url',
          render: (text : DirectorType["photo_url"]) => <Image src={text} style={{width:"60px"}}/>,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text : DirectorType["full_name"]) => <a>{text}</a>,
        },
        {
          title: 'Country',
          dataIndex: 'country',
          key: 'country',
        },
        {
          title: 'Biography',
          dataIndex: 'biography',
          key: 'biography',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_: unknown, record:DirectorType) => (
            <Space size="middle">
              <Button danger
              onClick={()=> deleteDirector(record.id)}>
                Delete
              </Button>
            </Space>
          ),
        },
      ];

    return <Table<DirectorType> columns={columns} dataSource={data} />
};

export default DirectorTable;