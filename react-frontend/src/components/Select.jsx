const Select = ({names}) => {
    return (
        <div class="w-60 select-container items-center justify-evenly flex flex-row rounded-md overflow-hidden shadow bg-gray-400 gap-0.5">
            {names.map(name => {
                return(
                    <div class="flex flex-row w-full justify-evenly items-center bg-white p-2 hover:cursor-pointer">
                        <div class="bg-white select-filter w-full">
                            <p>{name}</p>
                        </div>
                        <span class="text-black">i</span>
                    </div>

                )
            })}
        </div>
    )
}

export default Select;
