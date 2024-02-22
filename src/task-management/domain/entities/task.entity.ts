export class TaskEntity {
    public id: string;
    public title: string;
    public description: string;
    public status: boolean;

    constructor(
        id: string,
        title: string,
        description: string,
        status: boolean
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}
