import { Table, Image } from 'antd';
import type { TableProps } from 'antd';
import type { ActorType } from './ActorType';


const TablePage = ({data}:{data?:ActorType[]}) => { 

    const columns: TableProps<ActorType>['columns'] = [
        {
          title: 'Photo',
          dataIndex: 'photo_url',
          key: 'photo_url',
          render: (text : ActorType["photo_url"]) => <Image src={text} style={{width:"60px"}}/>,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
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
          title: '',
          dataIndex: 'biography',
          key: 'biography',
        },
        // {
        //   title: 'Action',
        //   key: 'action',
        //   render: (_: unknown, record:ActorType) => (
        //     <Space size="middle">
        //       <Button 
        //       onClick={}>
        //         Delete
        //       </Button>
        //     </Space>
        //   ),
        // },
      ];

    return <Table<ActorType> columns={columns} dataSource={data} />
};

export default TablePage;