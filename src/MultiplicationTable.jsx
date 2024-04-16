import { range } from "lodash";
import PropTypes from 'prop-types';

export default function MultiplicationTable({ x, y, textColor, backgroundColor, fontWeight, padding, borderWidth, ...props }) {
    return (
        <table style={{
            color: textColor,
            backgroundColor: backgroundColor,
            fontWeight: fontWeight,
            borderColor: 'black',
            borderStyle: 'solid',
            borderWidth: `${borderWidth}px`,
            textAlign: 'center'
        }} {...props}>
            <thead>
                <tr>
                    <th style={{
                        borderColor: 'black',
                        borderStyle: 'solid',
                        padding: `${padding}px`,
                        borderWidth: `${borderWidth}px`
                    }}></th>
                    {range(1, parseInt(x) + 1).map(col => <th style={{
                        borderColor: 'black',
                        borderStyle: 'solid',
                        padding: `${padding}px`,
                        borderWidth: `${borderWidth}px`,
                        fontWeight: '700'
                    }} key={col}>{col}</th>)}
                </tr>
            </thead>
            <tbody>
                {range(1, parseInt(y) + 1).map(row => <tr key={row}>
                    <td style={{
                        borderColor: 'black',
                        borderStyle: 'solid',
                        padding: `${padding}px`,
                        borderWidth: `${borderWidth}px`,
                        fontWeight: '700'
                    }}>{row}</td>
                    {range(1, parseInt(x) + 1).map(col => <td style={{
                        borderColor: 'black',
                        borderStyle: 'solid',
                        padding: `${padding}px`,
                        borderWidth: `${borderWidth}px`
                    }} key={col}>{col * row}</td>)}
                </tr>)}
            </tbody>
        </table>
    )
}

MultiplicationTable.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    textColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    fontWeight: PropTypes.number.isRequired,
    padding: PropTypes.number.isRequired,
    borderWidth: PropTypes.number.isRequired
}