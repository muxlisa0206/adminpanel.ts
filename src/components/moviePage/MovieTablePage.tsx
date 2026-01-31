import { Table, Space, Button } from 'antd';
import type { TableProps } from 'antd';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import type { MovieType } from './MovieType';


const MovieTablePage = ({data}:{data?:MovieType[]}) => { 

  const queryClient = useQueryClient()

    async function deleteMovie(id:string) {
        try{
            await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie/${id}`)
            toast.success("O'chirildi")
            queryClient.invalidateQueries({
                queryKey:["movie"]
            })
        }catch(err){
            console.log(err);
            toast.error("Xatolik yuz berdi")
        }
    }

    const columns: TableProps<MovieType>['columns'] = [
        {
            title: 'English',
            dataIndex: 'title_en',
            key: 'title_en',
            render: (text : MovieType["title_en"]) => <a>{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description_en',
            key: 'description_en',
            render: (text : MovieType["description_en"]) => <a>{text}</a>,
        },
        {
          title: 'Duration',
          dataIndex: 'duraton_minutes',
          key: 'duration_minutes'
        },
        {
          title: 'Release',
          dataIndex: 'release_year',
          key: 'release_year',
        },
        {
          title: 'Rating',
          dataIndex: 'imdb_rating',
          key: 'imdb_rating',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Language',
            dataIndex: 'language',
            key: 'language',
        },
        {
            title: 'Created',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_: unknown, record:MovieType) => (
            <Space size="middle">
              <Button danger
              onClick={()=> deleteMovie(record.id)}>
                Delete
              </Button>
            </Space>
          ),
        },
      ];

    return <Table<MovieType> columns={columns} dataSource={data} />
};

export default MovieTablePage;