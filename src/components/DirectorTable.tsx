import { Table, Image } from 'antd';
import type { TableProps } from 'antd';
import type { DirectorType } from './DirectorType';


const DirectorTable = ({data}:{data?:DirectorType[]}) => { 

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
        // {
        //   title: 'Action',
        //   key: 'action',
        //   render: (_: unknown, record:DirectorType) => (
        //     <Space size="middle">
        //       <Button>
        //         Delete
        //       </Button>
        //     </Space>
        //   ),
        // },
      ];

    return <Table<DirectorType> columns={columns} dataSource={data} />
};

export default DirectorTable;