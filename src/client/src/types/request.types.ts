export interface CreateTransactionRequest {
    amount: number;
    description: string;
    transactionTypeId: string;
    date: string;
    categoryId: string;
    accountId: string;
    title: string;
}

export interface CreateGoalRequest {
    amount: number;
    description: string;
    title: string;
    accountIds: string[];
}

