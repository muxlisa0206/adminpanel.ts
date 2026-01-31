import { Table, Space, Button } from 'antd';
import type { TableProps } from 'antd';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import type { GenreType } from './GenreType';


const GenreTablePage = ({data}:{data?:GenreType[]}) => { 

  const queryClient = useQueryClient()

    async function deleteGenre(id:string) {
        try{
            await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/genre/${id}`)
            toast.success("O'chirildi")
            queryClient.invalidateQueries({
                queryKey:["category"]
            })
        }catch(err){
            console.log(err);
            toast.error("Xatolik yuz berdi")
        }
    }

    const columns: TableProps<GenreType>['columns'] = [
        {
          title: 'Uzbek',
          dataIndex: 'name_uz',
          key: 'name_uz',
          render: (text : GenreType["name_uz"]) => <a>{text}</a>,
        },
        {
            title: 'Russia',
            dataIndex: 'name_ru',
            key: 'name_ru',
            render: (text : GenreType["name_ru"]) => <a>{text}</a>,
        },
        {
            title: 'English',
            dataIndex: 'name_en',
            key: 'name_en',
            render: (text : GenreType["name_en"]) => <a>{text}</a>,
        },
        {
          title: 'Slug',
          dataIndex: 'slug',
          key: 'slug'
        },
        {
          title: 'Icon',
          dataIndex: 'icon',
          key: 'icon',
        },
        {
          title: 'Active',
          dataIndex: 'is_active',
          key: 'is_active',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_: unknown, record:GenreType) => (
            <Space size="middle">
              <Button danger
              onClick={()=> deleteGenre(record.id)}>
                Delete
              </Button>
            </Space>
          ),
        },
      ];

    return <Table<GenreType> columns={columns} dataSource={data} />
};

export default GenreTablePage;