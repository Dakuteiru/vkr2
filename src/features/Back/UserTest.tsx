'use server';
export async function UserTest(param1: string, param2: string) {


    console.log(1);
    const response =await fetch("http://localhost:5294/login?useCookies=true&useSessionCookies=true",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({
                "email": param1,
                "password": param2,
            })
        });
    const User = await response.text();
    console.log("Сервер ответил, статус:", response.status);
    console.log(User);
    console.log(0);
    return User;

}