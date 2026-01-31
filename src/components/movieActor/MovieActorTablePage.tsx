import { Table, Space, Button } from 'antd';
import type { TableProps } from 'antd';
import type { MovieActorType } from './MovieActorType';
import type { ActorType } from '../actorPage/ActorType';
import type { MovieType } from '../moviePage/MovieType';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';


const MovieActorTablePage = ({data, actors, movies}:{data?:MovieActorType[], actors?:ActorType[],  movies?:MovieType[]}) =>{ 

    const queryClient = useQueryClient()

    async function deleteMovieActor(id:string) {
        try{
            await axios.delete(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_actor/${id}`)
            toast.success("O'chirildi")
            queryClient.invalidateQueries({
                queryKey:["movie_actors"]
            })
        }catch(err){
            console.log(err);
            toast.error("Xatolik yuz berdi")
        }
    }
    
    const columns: TableProps<MovieActorType>['columns'] = [
        {
          title: 'Movie name',
          dataIndex: 'movie_id',
          key: 'movie_id',
          render: (text: MovieActorType["movie_id"]) => <p>{
            movies?.find((el) => el.id === text)?.title_en
            }</p>
        },
        {
          title: 'Actor name',
          dataIndex: 'actor_id',
          key: 'actor_id',
          render: (text: MovieActorType["actor_id"]) => <p>{
            actors?.find((el) => el.id === text)?.full_name
            }</p>
        },
        {
          title: 'Role',
          dataIndex: 'role',
          key: 'role',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_: unknown, record:MovieActorType) => (
            <Space size="middle">
              <Button danger
              onClick={()=> deleteMovieActor(record.id)}>
                Delete
              </Button>
            </Space>
          ),
        },
      ];

    return <Table<MovieActorType> columns={columns} dataSource={data} />
};

export default MovieActorTablePage;