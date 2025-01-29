{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }
    function updateProfile(param: Profile, value:{name?:string, age?:number, email?:string}) : Profile {
        return {...param, ...value};
    }

    // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(updateProfile(myProfile, { age: 26 }));
}