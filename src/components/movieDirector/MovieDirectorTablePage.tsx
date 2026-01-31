import { Table, Space, Button } from 'antd';
import type { TableProps } from 'antd';
import type { MovieType } from '../moviePage/MovieType';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import type { MovieDirectorType } from './MovieDirectorType';
import type { DirectorType } from '../directorPage/DirectorType';


const MovieDirectorTablePage = ({data, director, movies}:{data?:MovieDirectorType[], director?:DirectorType[],  movies?:MovieType[]}) =>{ 

    const queryClient = useQueryClient()

    async function deleteMovieDirector(id:string) {
        try{
            await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_director/${id}`)
            toast.success("O'chirildi")
            queryClient.invalidateQueries({
                queryKey:["movie_director"]
            })
        }catch(err){
            console.log(err);
            toast.error("Xatolik yuz berdi")
        }
    }
    
    const columns: TableProps<MovieDirectorType>['columns'] = [
        {
          title: 'Movie name',
          dataIndex: 'movie_id',
          key: 'movie_id',
          render: (text: MovieDirectorType["movie_id"]) => <p>{
            movies?.find((el) => el.id === text)?.title_en
            }</p>
        },
        {
          title: 'Director name',
          dataIndex: 'director_id',
          key: 'director_id',
          render: (text: MovieDirectorType["director_id"]) => <p>{
            director?.find((el) => el.id === text)?.full_name
            }</p>
        },
        {
          title: 'Action',
          key: 'action',
          render: (_: unknown, record:MovieDirectorType) => (
            <Space size="middle">
              <Button danger
              onClick={()=> deleteMovieDirector(record.id)}>
                Delete
              </Button>
            </Space>
          ),
        },
      ];

    return <Table<MovieDirectorType> columns={columns} dataSource={data} />
};

export default MovieDirectorTablePage;