export interface HelloProps {
    name: string;
    age?: number;
}

export interface Admin extends HelloProps {
    role: string;
}
