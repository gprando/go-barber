import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('Create Appointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '1234543',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1234543');
  });

  // it('should be able to create a new appointment', () => {
  //   expect(1 + 2).toBe(3);
  // });
});
