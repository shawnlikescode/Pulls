type loaderProps = { show: Boolean };

export default function Loader({ show }: loaderProps): JSX.Element {
    return show ? <div className="loader"></div> : null;
}
