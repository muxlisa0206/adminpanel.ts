import { Table, Space, Button } from 'antd';
import type { TableProps } from 'antd';
import type { MovieType } from '../moviePage/MovieType';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import type { MovieGenreType } from './MovieGenreType';
import type { GenreType } from '../genrePage/GenreType';


const MovieGenreTablePage = ({data, genre, movies}:{data?:MovieGenreType[], genre?:GenreType[],  movies?:MovieType[]}) =>{ 

    const queryClient = useQueryClient()

    async function deleteMovieGenre(id:string) {
        try{
            await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_genre/${id}`)
            toast.success("O'chirildi")
            queryClient.invalidateQueries({
                queryKey:["movie_genre"]
            })
        }catch(err){
            console.log(err);
            toast.error("Xatolik yuz berdi")
        }
    }
    
    const columns: TableProps<MovieGenreType>['columns'] = [
        {
          title: 'Movie name',
          dataIndex: 'movie_id',
          key: 'movie_id',
          render: (text: MovieGenreType["movie_id"]) => <p>{
            movies?.find((el) => el.id === text)?.title_en
            }</p>
        },
        {
          title: 'Genre',
          dataIndex: 'genre_id',
          key: 'genre_id',
          render: (text: MovieGenreType["genre_id"]) => <p>{
            genre?.find((el) => el.id === text)?.name_en
            }</p>
        },
        {
          title: 'Action',
          key: 'action',
          render: (_: unknown, record:MovieGenreType) => (
            <Space size="middle">
              <Button danger
              onClick={()=> deleteMovieGenre(record.id)}>
                Delete
              </Button>
            </Space>
          ),
        },
      ];

    return <Table<MovieGenreType> columns={columns} dataSource={data} />
};

export default MovieGenreTablePage;