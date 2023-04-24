import * as React from "react";
import Paper from "@mui/material/Paper";
import {
	ViewState,
	GroupingState,
	IntegratedGrouping,
	IntegratedEditing,
	EditingState,
} from "@devexpress/dx-react-scheduler";
import {
	Scheduler,
	Resources,
	Appointments,
	AppointmentTooltip,
	GroupingPanel,
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
import { teal, indigo } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

const appointments = [
	{
		id: 0,
		title: "Watercolor Landscape",
		members: [1, 2],
		roomId: 1,
		startDate: new Date(2017, 4, 28, 9, 30),
		endDate: new Date(2017, 4, 28, 12, 0),
	},
	{
		id: 1,
		title: "Oil Painting for Beginners",
		members: [1],
		roomId: 2,
		startDate: new Date(2017, 4, 28, 12, 30),
		endDate: new Date(2017, 4, 28, 14, 30),
	},
	{
		id: 2,
		title: "Testing",
		members: [1, 2],
		roomId: 1,
		startDate: new Date(2017, 4, 29, 12, 30),
		endDate: new Date(2017, 4, 29, 14, 30),
	},
	{
		id: 3,
		title: "Final exams",
		members: [1, 2],
		roomId: 2,
		startDate: new Date(2017, 4, 29, 9, 30),
		endDate: new Date(2017, 4, 29, 12, 0),
	},
];

const owners = [
	{
		text: "Andrew Glover",
		id: 1,
		color: indigo,
	},
	{
		text: "Arnie Schwartz",
		id: 2,
		color: teal,
	},
	{
		text: "Arnie Schwartz",
		id: 3,
		color: teal,
	},
	{
		text: "Arnie Schwartz",
		id: 4,
		color: teal,
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
const StyledGrid = styled(Grid)(({ theme: { spacing } }) => ({
	[`&.${classes.checkBoxContainer}`]: {
		paddingTop: spacing(1),
		paddingBottom: spacing(1),
		paddingLeft: spacing(4),
	},
}));
const StyledTextField = styled(TextField)(({ theme: { spacing } }) => ({
	[`&.${classes.textField}`]: {
		marginRight: spacing(4),
		marginLeft: spacing(1),
		width: "120px",
	},
}));

const UpdateIntervalBox = ({ updateInterval, onValueChange }) => (
	<Grid item container xs={6} alignItems='center' justifyContent='flex-end'>
		<Typography>Staff schedule</Typography>
		<StyledTextField
			className={classes.textField}
			variant='outlined'
			onChange={(event) => onValueChange(event.target.value)}
			value={updateInterval / 1000}
			type='number'
			InputProps={{
				endAdornment: <InputAdornment position='end'>s</InputAdornment>,
			}}
		/>
	</Grid>
);

export default class Demo extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			data: appointments,
			resources: [
				{
					fieldName: "members",
					title: "Members",
					instances: owners,
					allowMultiple: true,
				},
			],
			grouping: [
				{
					resourceName: "members",
				},
			],
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
			resources,
			grouping,
			shadePreviousCells,
			updateInterval,
			shadePreviousAppointments,
		} = this.state;

		return (
			<React.Fragment>
				<Grid container paddingTop='1em' paddingLeft='1em'>
					{/* <UpdateIntervalBox updateInterval={updateInterval} /> */}
					<h2>Staff Schedule</h2>
				</Grid>
				<Paper>
					<Scheduler data={data} height={850}>
						<ViewState defaultCurrentDate={current} />
						<EditingState onCommitChanges={this.commitChanges} />
						<GroupingState grouping={grouping} />

						<WeekView />
						<DayView />
						<Appointments />
						<Resources data={resources} mainResourceName='members' />
						<IntegratedGrouping />
						<IntegratedEditing />

						<Toolbar />
						<ViewSwitcher />
						<DateNavigator />
						<TodayButton />
						<AppointmentTooltip showOpenButton />
						<AppointmentForm />
						<GroupingPanel />
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
