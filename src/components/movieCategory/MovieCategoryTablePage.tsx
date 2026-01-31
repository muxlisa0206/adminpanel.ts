import { Table, Space, Button } from 'antd';
import type { TableProps } from 'antd';
import type { MovieType } from '../moviePage/MovieType';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import type { MovieCategoryType } from './MovieCategoryType';
import type { CategoryType } from '../categoryPage/CategoryType';


const MovieCategoryTablePage = ({data, category, movies}:{data?:MovieCategoryType[], category?:CategoryType[],  movies?:MovieType[]}) =>{ 

    const queryClient = useQueryClient()

    async function deleteMovieCategory(id:string) {
        try{
            await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_category/${id}`)
            toast.success("O'chirildi")
            queryClient.invalidateQueries({
                queryKey:["movie_category"]
            })
        }catch(err){
            console.log(err);
            toast.error("Xatolik yuz berdi")
        }
    }
    
    const columns: TableProps<MovieCategoryType>['columns'] = [
        {
          title: 'Movie name',
          dataIndex: 'movie_id',
          key: 'movie_id',
          render: (text: MovieCategoryType["movie_id"]) => <p>{
            movies?.find((el) => el.id === text)?.title_en
            }</p>
        },
        {
          title: 'Category name',
          dataIndex: 'category_id',
          key: 'category_id',
          render: (text: MovieCategoryType["category_id"]) => <p>{
            category?.find((el) => el.id === text)?.name_en
            }</p>
        },
        {
          title: 'Action',
          key: 'action',
          render: (_: unknown, record:MovieCategoryType) => (
            <Space size="middle">
              <Button danger
              onClick={()=> deleteMovieCategory(record.id)}>
                Delete
              </Button>
            </Space>
          ),
        },
      ];

    return <Table<MovieCategoryType> columns={columns} dataSource={data} />
};

export default MovieCategoryTablePage;