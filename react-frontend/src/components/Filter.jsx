import './Filter.css'

const Filter = () => {
    const filters = [
        {name:'ID', active: true},
        {name: 'Packet Length', active:true},
        {name: 'Destination IP', active:true},
        {name: 'Protocol', active:true},
        {name: 'Timestamp', active:true},
        {name: 'Source IP', active:true},
        {name: 'Payload', active:true},
        {name: 'Broadcast', active:true},
        {name: 'Trailer', active:true}
    ];
    return(
        <div class="flex flex-col gap-1">{filters.map(filter => {
            return (
                <div class="filter w-full text-center rounded-md py-2 border border-gray-300 hover:cursor-pointer">
                    <p>{filter.name}</p>
                </div>
            )
        })}
        </div>
    )
}

export default Filter;
