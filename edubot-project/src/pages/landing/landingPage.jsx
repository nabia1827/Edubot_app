import React from "react";
import { Grid } from "antd";
import LandingWeb from "./landingWeb";
import LandingMobile from "./landingMobile";

const { useBreakpoint } = Grid;

function LandingPage() {
    const screens = useBreakpoint();
    const isXsScreen = screens.xs !== undefined && screens.xs;

    return <>{isXsScreen ? <LandingMobile /> : <LandingWeb />}</>;
}

export default LandingPage;