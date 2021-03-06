package net.greatstart.mappers;

import net.greatstart.dto.DtoUserProfile;
import net.greatstart.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface UserProfileMapper {
    @Mappings({
            @Mapping(target = "address", source = "contact.address"),
            @Mapping(target = "phoneNumber", source = "contact.phoneNumber")
        })
    DtoUserProfile fromUserToDtoProfile(User user);

    @Mappings({
            @Mapping(source = "address", target = "contact.address"),
            @Mapping(source = "phoneNumber", target = "contact.phoneNumber")
        })
    User fromDtoProfileToUser(DtoUserProfile dtoUserProfile);
}
