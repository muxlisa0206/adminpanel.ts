import { Table, Image, Space, Button } from 'antd';
import type { TableProps } from 'antd';
import type { ActorType } from './ActorType';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';


const TablePage = ({data}:{data?:ActorType[]}) => { 

  const queryClient = useQueryClient()

    async function deleteActor(id:string) {
        try{
            await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor/${id}`)
            toast.success("O'chirildi")
            queryClient.invalidateQueries({
                queryKey:["movie_actors"]
            })
        }catch(err){
            console.log(err);
            toast.error("Xatolik yuz berdi")
        }
    }

    const columns: TableProps<ActorType>['columns'] = [
        {
          title: 'Photo',
          dataIndex: 'photo_url',
          key: 'photo_url',
          render: (text : ActorType["photo_url"]) => <Image src={text} style={{width:"60px"}}/>,
        },
        {
          title: 'Name',
          dataIndex: 'full_name',
          key: 'full_name',
          render: (text : ActorType["full_name"]) => <a>{text}</a>,
        },
        {
          title: 'Birth Year',
          dataIndex: 'birth_year',
          key: 'birth_year'
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
          render: (_: unknown, record:ActorType) => (
            <Space size="middle">
              <Button danger
              onClick={()=> deleteActor(record.id)}>
                Delete
              </Button>
            </Space>
          ),
        },
      ];

    return <Table<ActorType> columns={columns} dataSource={data} />
};

export default TablePage;