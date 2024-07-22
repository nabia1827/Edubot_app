import React from "react";
import { Grid } from "antd";
import DemoWeb from "./demoWeb";
import DemoMobile from "./demoMobile";

const { useBreakpoint } = Grid;

function DemoPage() {
    const screens = useBreakpoint();
    const isXsScreen = screens.xs !== undefined && screens.xs;

    return <>{isXsScreen ? <DemoMobile /> : <DemoWeb />}</>;
}

export default DemoPage;