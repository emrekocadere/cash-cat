using AutoMapper;
using MediatR;
using WalletUp.Application.Common.Services;
using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;

namespace WalletUp.Application.Preference.Commands.CreatePreference;

public class CreatePreferenceCommandHandler(
    IRepository<Domain.Entities.Preference> preferenceRepository,
    IMapper mapper,
    IUserContext userContext)
    : IRequestHandler<CreatePreferenceCommand, Result>
{
    public async Task<Result> Handle(CreatePreferenceCommand request, CancellationToken cancellationToken)
    {
        var preference = mapper.Map<Domain.Entities.Preference>(request);
        preference.UserId = userContext.UserId;
        await preferenceRepository.Create(preference);
        await preferenceRepository.SaveChanges();
        return Result.Success();
    }
}