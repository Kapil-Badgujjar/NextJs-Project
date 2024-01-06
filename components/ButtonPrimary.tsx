type propsType =  {
    title: string,
    action: (...args: any[]) => void }
export default function(props:propsType) {
    return (
        <button className="w-full text-center text-white bg-[#031B89] leading-[160%] py-1 rounded-md" onClick={props.action}>
            {props.title}
        </button>
    );
}