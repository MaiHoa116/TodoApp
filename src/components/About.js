import React, { useContext, useEffect } from 'react';
import { MyContext } from '../context/MyContext';

export const MyCard = React.memo(({ name, gender }) => {
    useEffect(() => {
        console.log('Render MyCard')
    });
    return (
        <div>
            <h3>My name: {name}</h3>
            <h4>Gender: {gender}</h4>
        </div>
    )
});

// Arrow Function components
export const About = () => {
    const { count, setCount } = useContext(MyContext);

    return (
        <div>
            <h2>GIỚI THIỆU</h2>
            <h4>Họ và tên: Nguyễn Thị Mai Hoa</h4>
            <h4>Trường: ĐH Sư Phạm TP.HCM</h4>
            <h4>MSSV: 4501104087</h4>
            <h4>Ngày sinh: 11/06/2001</h4>
            <h4>Giới Tính: Nữ</h4>
            <h4></h4>
        </div>
    )
};
