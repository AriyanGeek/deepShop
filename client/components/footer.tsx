"use client";
import styled from "styled-components";
import Image from 'next/image'
import { Divider } from "@nextui-org/react";

export const Footer = () => {

    return(
    <>
        <div className="flex md:flex-row flex-col bg-gradient-to-r from-primary to-primary-600 shadow-large">

            <div className="flex flex-col md:basis-1/2 py-10 md:px-20 text-white text-justify">
                <div className="flex md:basis-1 text-[2rem] lg:text-xl text-justify font-bold">تک سرویس کار</div>
                <Divider className="mt-5"></Divider>
                <div className="flex flex-row md:basis-1/2 py-5 text-[1rem] lg:text-l text-justify">
                    <Image
                        width={100}
                        height={100}        
                        alt="تک سرویس کار"
                        className="object-cover ml-5"
                        src={'/male-worker.jpg'}
                        />
                    <div className="leading-7">تک سرویس کار مفتخر است در زمینه تعمیرات لوازم خانگی از جمله لباسشویی، کولرگازی و پکیج، تعمیرات لوازم را در کمترین زمان ممکن و با گارانتی ارائه کند.</div>
                </div>
            </div>
            <div className="flex flex-col md:basis-1/4 py-10 md:px-5 text-white text-justify">
                <div className="flex md:basis-1 text-[2rem] lg:text-xl text-justify font-bold">
                    خدمات ما
                </div>
                <Divider className="mt-5"></Divider>
                <div className="flex flex-col py-5 text-[1rem] lg:text-l text-justify leading-loose">
                    <h1>تعمیرات لباسشویی در تهران</h1>
                    <h1>تعمیرات کولر در تهران</h1>
                    <h1>تعمیرات پکیج در تهران</h1>
                    <h1>تعمیرات لباسشویی در کرج</h1>
                    <h1>تعمیرات کولر در کرج</h1>
                    <h1>تعمیرات پکیج در کرج</h1>
                </div>
            </div>

            <div className="flex flex-col md:basis-1/4 py-10 md:px-5 text-white text-justify">
                <div className="flex md:basis-1 text-[2rem] lg:text-xl text-justify font-bold">
                    تماس با ما
                </div>
                <Divider className="mt-5"></Divider>
                <div className="flex flex-row md:basis-1/2 py-5 text-[1rem] lg:text-l text-justify"></div>
            </div>
        </div>

        <ServiceBody className="text-primary">

        </ServiceBody>
    </>      
    );
};
const ServiceHeader = styled.div`
    min-height: 100px;
    width: 100%;
`
const ServiceBody = styled.div`
    width: 100%;
`
