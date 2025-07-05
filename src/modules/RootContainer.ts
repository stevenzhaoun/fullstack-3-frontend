import useInitialLoading from "../hooks/useInitialLoading"

function RootContainer(props: any) {

    useInitialLoading()

    return props.children
}

export default RootContainer