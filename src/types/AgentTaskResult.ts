import TaskTimings from "../TaskTimings";
import {TaskStatus} from "../enum/TaskStatus";

export default interface AgentTaskResult {
    timigs: TaskTimings,
    session: string|null
    status: TaskStatus,
    output: boolean|number|string|object|null,
    error?: any
}