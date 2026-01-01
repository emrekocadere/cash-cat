using MediatR;
using WalletUp.Application.Identity.Dtos;
using WalletUp.Domain.Common;

namespace WalletUp.Application.Identity.Commands.RefreshToken;

public record RefreshTokenCommand(string AccessToken,string RefreshToken):IRequest<ResultT<TokenDto>>;
