import { ChartData } from 'chart.js';
import { IMetaFormBuilder } from 'src/components/form/FormBuilder/FormBuilder';
import { COLOR_PALETTE } from 'src/constants';
import faker from 'faker';

export const metaDashboardFilter: IMetaFormBuilder = {
    fields: [
        {
            key: 'startDate',
            widget: 'date-picker',
            widgetProps: {
                placeholder: 'Từ ngày',
                style: { width: '12rem' },
            },
        },
        {
            key: 'endDate',
            widget: 'date-picker',
            widgetProps: {
                placeholder: 'Đến ngày',
                style: { width: '12rem' },
            },
        },
    ],
};

export const pieData: ChartData<'pie', number[], string> = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [COLOR_PALETTE[0], COLOR_PALETTE[1], COLOR_PALETTE[2]],
            hoverOffset: 4,
        },
    ],
};

export const labels = ['1', '2', '3', '4', '5', '6', '7', '8'];

export const barChartData: ChartData<'bar', number[], string> = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: COLOR_PALETTE[0],
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: COLOR_PALETTE[1],
        },
        {
            label: 'Dataset 3',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: COLOR_PALETTE[2],
        },
        {
            label: 'Dataset 4',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: COLOR_PALETTE[3],
        },
    ],
};

export const barChartCardData: ChartData<'bar', number[], string> = {
    labels,
    datasets: [
        {
            label: 'Thẻ',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: COLOR_PALETTE[0],
        },
        {
            label: 'QR Code',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: COLOR_PALETTE[1],
        },
    ],
};

export const pieCardData: ChartData<'pie', number[], string> = {
    labels: ['Thẻ', 'QR Code'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [
                faker.datatype.number({ min: 0, max: 1000 }),
                faker.datatype.number({ min: 0, max: 1000 }),
            ],
            backgroundColor: [COLOR_PALETTE[0], COLOR_PALETTE[1]],
            hoverOffset: 4,
        },
    ],
};
