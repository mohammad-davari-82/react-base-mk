import React from "react";
import MoreItem from "./MoreItem";
import {SmileOutlined,} from "@ant-design/icons";
import { MobileView } from "react-device-detect";







const More = (props) => {
    return(
        <>
            <MobileView>
                <MoreItem to="/about" icon={<SmileOutlined  style={{ padding: "10px" }}></SmileOutlined>}text={"About"}></MoreItem>
            </MobileView>
        </>
    )
}
export default More;
