export interface QuestionType {
    questionId: number;
    question: string;
    questionType: any;
    options?: Array<string | number> | undefined;
}