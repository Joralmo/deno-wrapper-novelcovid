export class WrapperNovelError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'WrapperNovelError';
    }
}