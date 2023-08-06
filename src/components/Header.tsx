export interface Props {
    title: string,
    color?: string
}


function header(props: Props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default header;