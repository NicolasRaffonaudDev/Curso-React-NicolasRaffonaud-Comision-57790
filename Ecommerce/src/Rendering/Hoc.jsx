function withLogging(WrappedComponent) {
    return function (props) {
        console.log("Componente renderizado con props: ", props)
        return <WrappedComponent {...props} />
    }
}
export function MyComponent({message}) {
    return <h1>{message}</h1>
}
const MyComponentWithLoggin = withLogging(MyComponent)

export default MyComponentWithLoggin