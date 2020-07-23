import AppError from '@shared/errors/AppError';
import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentRepository: FakeAppointmentRepository;
let createAppointmentService: CreateAppointmentService;

describe('Create Appointment', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    createAppointmentService = new CreateAppointmentService(
      fakeAppointmentRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointmentService.execute({
      date: new Date(),
      user_id: '12345',
      provider_id: '1234543',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1234543');
  });

  it('should be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointmentService.execute({
      date: appointmentDate,
      user_id: '12345',
      provider_id: '1234543',
    });

    await expect(
      createAppointmentService.execute({
        date: appointmentDate,
        user_id: '12345',
        provider_id: '1234543',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
