import React, { useEffect, useState } from 'react';

export default function Periods(props) {

    const {periods, defaultPeriod} = props;

    //const [periods, setPeriods] = useState([]);    
    const onChangePeriod = (event) =>{        
        props.onChangePeriod(event.target.value);
    }    

    const getDataFormatada = (item) =>{
        var mes = (+item.split('-')[1])-1;

        const mesNome = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
                            "Agosto", "Setembro", "Outubro", "Novembro", "Dezemrbo"];

        return `${mesNome[mes]} / ${item.split('-')[0]}`;
    }

    return (
        <div className="col s4">
                    <select className="browser-default" value={defaultPeriod} onChange={onChangePeriod}>
                        {periods.length > 0 && periods.map(item => {
                            return (<option key={item} value={item}>{getDataFormatada(item)}</option>)
                        })}
                    </select>                    
                </div>
    )
}
