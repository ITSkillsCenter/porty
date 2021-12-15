import React from 'react';
import Service_single from './Service_single';

function Services() {

    const serviceJson = [
        {
            id: 1,
            title: "Cras convallis mollis justo",
            content: "Sed dapibus vulputate diam nec hendrerit. In libero purus, interdum vitae purus nec, convallis sollicitudin nunc. Curabitur maximus maximus ex a scelerisque."
        },
        {
            id: 2,
            title: "Nullam dictum pretium",
            content: "Quisque vestibulum lectus eros, tincidunt ultricies ante euismod non. Ut sed consequat est, quis lobortis lorem. Nullam dictum pretium mauris eu aliquam."
        },
        {
            id: 3,
            title: "Etiam in quam dolor",
            content: "Aliquam in congue diam, non tincidunt ligula. Suspendisse facilisis elit eget quam semper aliquet. Donec ut purus aliquet, imperdiet lacus id, faucibus lectus."
        },
        {
            id: 4,
            title: "Duis ornare felis nec orci",
            content: "Nam dapibus lectus ultricies neque feugiat eleifend. Donec ornare dolor suscipit metus hendrerit, vel malesuada neque mattis. Fusce posuere cursus mattis."
        },
        {
            id: 5,
            title: "Class aptent taciti sociosqu",
            content: "Maecenas et libero in eros laoreet finibus sed vitae diam. Etiam consetetur, nunc sed pretium elementum, diam erat fringilla tortor, placerat condimentum."
        },
        {
            id: 6,
            title: "Suspendisse ut malesuada",
            content: "Vestibulum non lectus id lacus aliquet porttitor in non nulla. Aenean urna diam, finibys id lorem nec, feugiat convallis dolor. Integer aliquam, eros eget rutrum iaculis."
        }
    ]

    return (
        <div>
            <div class="mx-auto tm-content-container mt-4 px-3">
				<div class="row tm-catalog-item-list mb-4">
                    {
                        serviceJson.map((item, index) => (
                            <Service_single key={ index } title={ item.title } content={ item.content } />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services;
