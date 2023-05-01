import * as React from "react";
import Paper from "@mui/material/Paper";
import {
	ViewState,
	IntegratedEditing,
	EditingState,
} from "@devexpress/dx-react-scheduler";
import {
	Scheduler,
	Appointments,
	AppointmentTooltip,
	DayView,
	WeekView,
	ViewSwitcher,
	DragDropProvider,
	AppointmentForm,
	Toolbar,
	DateNavigator,
	TodayButton,
	CurrentTimeIndicator,
} from "@devexpress/dx-react-scheduler-material-ui";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

// API
import AddTask from "../../api-client/Scheduler/AddTask";

const appointments = [
	{
		id: 0,
		title: "Watercolor Landscape",
		startDate: new Date(2017, 4, 28, 9, 30),
		endDate: new Date(2017, 4, 28, 12, 0),
	},
	{
		id: 1,
		title: "Oil Painting for Beginners",
		startDate: new Date(2017, 4, 28, 12, 30),
		endDate: new Date(2017, 4, 28, 14, 30),
	},
	{
		id: 2,
		title: "Testing",
		startDate: new Date(2017, 4, 29, 12, 30),
		endDate: new Date(2017, 4, 29, 14, 30),
	},
	{
		id: 3,
		title: "Final exams",
		startDate: new Date(2017, 4, 29, 9, 30),
		endDate: new Date(2017, 4, 29, 12, 0),
	},
];

const date = new Date();
const current = `${date.getFullYear()}-${
	date.getMonth() + 1
}-${date.getDate()}`;

const PREFIX = "Demo";

const classes = {
	checkBoxContainer: `${PREFIX}-checkBoxContainer`,
	textField: `${PREFIX}-textField`,
};

const formattedDate = (date) => {
	const parsedDate = new Date(date);
	const year = parsedDate.getFullYear();
	const month =
		parsedDate.getMonth() + 1 < 10
			? `0${parsedDate.getMonth() + 1}`
			: parsedDate.getMonth() + 1;
	const day =
		parsedDate.getDate() < 10
			? `0${parsedDate.getDate()}`
			: parsedDate.getDate();
	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
};

export default class Demo extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			data: appointments,
			shadePreviousCells: true,
			shadePreviousAppointments: true,
			updateInterval: 10000,
		};

		this.commitChanges = this.commitChanges.bind(this);

		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.handleUpdateIntervalChange = (nextValue) => {
			this.setState({
				updateInterval: nextValue * 1000,
			});
		};
	}

	handleCheckboxChange(stateField) {
		const { [stateField]: fieldToChange } = this.state;
		this.setState({
			[stateField]: !fieldToChange,
		});
	}

	commitChanges({ added, changed, deleted }) {
		this.setState((state) => {
			let { data } = state;
			if (added) {
				added.startDate = formattedDate(added.startDate);
				added.endDate = formattedDate(added.endDate);
				console.log(added);
				const response = AddTask(added);
				response.then((res) => {
					console.log(res);
				});
				const startingAddedId =
					data.length > 0 ? data[data.length - 1].id + 1 : 0;
				data = [...data, { id: startingAddedId, ...added }];
			}
			if (changed) {
				data = data.map((appointment) =>
					changed[appointment.id]
						? { ...appointment, ...changed[appointment.id] }
						: appointment,
				);
			}
			if (deleted !== undefined) {
				data = data.filter((appointment) => appointment.id !== deleted);
			}
			return { data };
		});
	}

	render() {
		const {
			data,
			shadePreviousCells,
			updateInterval,
			shadePreviousAppointments,
		} = this.state;

		return (
			<React.Fragment>
				<Grid container paddingTop='1em' paddingLeft='1em'>
					<h2>Staff Schedule</h2>
				</Grid>
				<Paper>
					<Scheduler data={data} height={850}>
						<ViewState defaultCurrentDate={current} />
						<EditingState onCommitChanges={this.commitChanges} />

						<WeekView />
						<DayView />
						<Appointments />
						<IntegratedEditing />

						<Toolbar />
						<ViewSwitcher />
						<DateNavigator />
						<TodayButton />
						<AppointmentTooltip showOpenButton />
						<AppointmentForm />
						<DragDropProvider />
						<CurrentTimeIndicator
							shadePreviousCells={shadePreviousCells}
							shadePreviousAppointments={shadePreviousAppointments}
							updateInterval={updateInterval}
						/>
					</Scheduler>
				</Paper>
			</React.Fragment>
		);
	}
}
