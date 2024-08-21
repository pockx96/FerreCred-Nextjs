'use client'

import { PaySelection } from "./pay-selection";
import { SellTable } from "./sell-table";
import { CardTotal } from "./card-total";
import SeachBarSell from "./search-bar-sell";
import { CardClient } from "./card-client";
import { CardDebt } from "./card-debt";

export const SellCart = ()=>{

    return(
        <section className="flex flex-col w-full max-h-full">
            <div className="flex justify-between">
                <PaySelection/>
                <SeachBarSell/>
            </div>
            <div className="flex justify-start h-[20%]">
                <CardClient/>
                <CardDebt/>
            </div>
            <div className="flex w-full my-2  justify-start">
                <div className="w-full ">
                <SellTable/>
                </div>
            </div>
            <div className="flex justify-end  h-2/5">
                <CardTotal/>
            </div>
        </section>
    );
}