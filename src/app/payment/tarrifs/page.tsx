
import "@/features/test1.css"

import {Tarrifmap} from "@/features/PayBlock/ShopBlock";


const page = () => {
    return (<div className="grid gap-y-2">
        <div className="flex w-full h-auto bg-linear-to-r from-lime-200 to-blue-500">tarrifs</div>
        <Tarrifmap  tarriffBlock={[
                {title:"Базовый старт", description:"Доступ к лекциям в записи, практические домашние задания с автоматической проверкой кода и общий чат со студентами. Отличный выбор для самостоятельного изучения основ.", button:"Купить за 4 900 ₽ / мес."},
                {title:"Продвинутый с ментором", description:"Все материалы курса плюс еженедельные созвоны с личным наставником, подробный разбор ваших проектов, помощь с резюме, гарантированное трудоустройство и подготовка к собеседованиям.",button:"Купить за 12 500 ₽ / мес."}]}></Tarrifmap>

    </div >)
}
export default page;