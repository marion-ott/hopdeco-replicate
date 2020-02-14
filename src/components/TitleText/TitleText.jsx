import React from 'react'
import Title from './../UI/Title/Title.jsx'
import Text from './../UI/Text/Text.jsx'

const TitleText = ({ title, underline, text, index }) => (
    <div className="layout">
        <Title index={index} title={title} underline={underline} />
        <Text align="alignRight" text={text} />
    </div>
)

export default TitleText
