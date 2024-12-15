import React from "react";

import Layout from '../Layout';
import Filter from '../components/Filter';
import Widget from '../components/Widget';
import Select from '../components/Select';
import pie from '../media/pie.png'
import bar from '../media/bar.png'

const General = () => {
    return (
        <div class="p-5 content grid grid-cols-2 max-sm:grid-cols-1 gap-2 grid-rows-8 place-items-center w-full h-full">
            
            <div class="justify-self-start self-start">
                <Select />
            </div>
            <div class="md:row-span-4 self-start">
                <Widget content={pie} description="This is some interesting statistics" css="self-end"></Widget>
            </div>
            <div className="justify-self-stretch self-start">
                <Widget content={"text"} description="Some more statistcs if you'd like" css="self-end"></Widget>
            </div>


            <div className="justify-self-stretch self-start">
                <Widget content={"text"} description="This is some interesting statistics" css="self-end"></Widget>
            </div>

            <div class="md:row-span-4 self-start">
                <Widget content={bar} description="First" css="self-start"></Widget>
            </div>
            <div className="md:row-span-2 self-start">
                <Widget content={"text"} description="For each client certificate, select + Add certificate, paste or upload the client certificate, then select Done.If your database uses Replica Of, you also need to add the syncer certificates for the participating clusters." css="self-center"></Widget>
            </div>

        </div>
    )
}

export default General;
