import {Input, Tag} from 'antd';
import type { GetProps } from 'antd';
type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;
export default function BuyNow() {
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    return (
        <div>
            <div className="pt-4 px-4 w-full gradient-bottom">
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
                <p className="mt-2">热门搜索：<Tag color="cyan">关键词</Tag></p>
            </div>
            <div className="m-4 rounded-[8px] my-4 box-shadow-grey h-[70vh] flex items-center justify-center">
                <p>暂无挂单</p>
            </div>
        </div>
    );
}
