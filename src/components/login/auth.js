import { useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "../../context/loginContext";

export default function Auth(props) {

    const logincontext = useContext(LoginContext);
    const canDo = logincontext.can(props.capability);
    console.log(props.capability)

    return (
        <When condition={logincontext.loggedIn && canDo}>{props.children}</When>
    )
}