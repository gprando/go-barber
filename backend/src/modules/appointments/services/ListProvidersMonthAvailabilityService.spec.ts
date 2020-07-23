// import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProvidersMonthAvailabilityService from './ListProvidersMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProvidersMonthAvailability: ListProvidersMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProvidersMonthAvailability = new ListProvidersMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 7, 27, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 7, 27, 9, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 7, 27, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 7, 27, 11, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 7, 27, 12, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 7, 27, 13, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 7, 27, 14, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 7, 27, 15, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 7, 27, 16, 0, 0),
    });

    const availability = await listProvidersMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 26, available: true },
        { day: 27, available: false },
        { day: 29, available: true },
        { day: 30, available: true },
      ]),
    );
  });
});
