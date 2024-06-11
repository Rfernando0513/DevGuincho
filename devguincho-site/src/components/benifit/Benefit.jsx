import React from "react";
import Counter from "../counter/Counter";
import './Benefit.css';

const Benefit = ({ title, subTitle, description, highLight, showCounter }) => {
    const titleParts = title ? title.split('<br/>') : [];

    return (
        <>
            <div className="benefit-data">
                {showCounter ? <Counter end={subTitle} /> : <h2 className="subTitleCounter">{subTitle}</h2>}
                <h3>
                    {titleParts.map((part, index) => (
                        <React.Fragment key={index}>
                            {index === 0 ? part : <>{' '}{part}</>}
                        </React.Fragment>
                    ))}
                </h3>
            </div>


            <div className="description">
                <p>{description && highLight ? description.split(highLight).map((part, index) => (
                    <React.Fragment key={index}>
                        {part}
                        {index !== description.split(highLight).length - 1 && <b>{highLight}</b>}
                    </React.Fragment>
                )) : description}</p>
            </div>
        </>
    );
}

export default Benefit;
