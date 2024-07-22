import React from 'react';
import { motion } from 'framer-motion';
import { Flex, Typography } from 'antd';
import {
    CheckCircleOutlined
} from '@ant-design/icons';
const { Text, Title } = Typography;

const PlanItem = (props) => {
    const {message} = props;

    return (
        <>
            <Flex gap={'small'} justify='flex-start'>
                <CheckCircleOutlined />
                <Text className='banner-text'>{message}</Text>
            </Flex>
        </>
    );
}

export default PlanItem;