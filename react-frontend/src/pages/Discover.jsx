import Input from '../components/Input'
import Select from '../components/Select'
import Table from '../components/Table'
import Filter from '../components/Filter'
import discoverStat from '../media/discover-stats.png'
const Discover = () => {
    return (
        <div className="flex flex-col w-full">
            <div class="my-3">
                <img src={discoverStat} />
            </div>

            <Input></Input>
            <div class="my-2">
                <Select names={['Protocol', 'Year', 'Limit']}></Select>
            </div>

            <div className="pt-4 gap-4 flex flex-row w-full">
                <div class="w-1/4 max-md:w-0 max-md:hidden">
                    <Filter></Filter>
                </div>

                <div class="w-3/4 max-md:w-full">

                    <Table></Table>
                </div>
            </div>
        </div>
    )
}

export default Discover
