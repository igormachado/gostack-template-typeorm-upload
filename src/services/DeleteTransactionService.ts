import { getCustomRepository } from 'typeorm';

import Transaction from '../models/Transaction';

import AppError from '../errors/AppError';

import Transactionsrepository from '../repositories/TransactionsRepository';

class ImportTransactionsService {
  async execute(id: string): Promise<void> {
    // TODO
    const transactionsRepository = getCustomRepository(Transactionsrepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exists.');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default ImportTransactionsService;
