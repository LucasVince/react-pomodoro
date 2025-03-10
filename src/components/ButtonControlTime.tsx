import { FunctionComponent, ReactNode } from "react";

interface ButtonControlTimeProps {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    children: ReactNode;
}

const ButtonControlTime: FunctionComponent<ButtonControlTimeProps> = (props) => {
    return (
        <button className="text-3xl bg-red-200 w-8 h-8 flex justify-center items-center self-center rounded-lg active:bg-red-400" {...props}>{props.children}</button>
    );
}

export default ButtonControlTime