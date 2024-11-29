import styles from "@/app/styles";
import Image from "next/image";


const StartSteps = ({ number, text, img }) => (
    <div className={`${styles.flexCenter} flex-row`}>
        <div
            className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
        >
            <p className="font-bold text-[20px] text-white">
                {number}
            </p>
            {img && (
                <Image src={img} width={40} height={40} alt="" />
            )}
        </div>
        <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
            {text}
        </p>
    </div>
);

export default StartSteps;