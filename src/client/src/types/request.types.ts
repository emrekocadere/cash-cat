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
    target: number;
    description: string;
    title: string;
}

export interface AddTransactionToGoalRequest {
    amount: number;
    transactionTypeId: string;
}



